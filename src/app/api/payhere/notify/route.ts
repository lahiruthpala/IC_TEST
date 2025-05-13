import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { processDelegatePayment, processPayHereNotification } from '@/lib/payhere/paymentService';

export async function POST(req: Request) {
  const formData = await req.formData();
  const payload: Record<string, string> = {};
  formData.forEach((value, key) => {
    payload[key] = Array.isArray(value) ? value[0] : value.toString();
  });

  try {
    // Verify MD5 signature first (moved from paymentService)
    const secret = process.env.PAYHERE_MERCHANT_SECRET!;
    const hashedSecret = crypto.createHash('md5').update(secret).digest('hex').toUpperCase();
    const raw =
      payload.merchant_id +
      payload.order_id +
      payload.payhere_amount +
      payload.payhere_currency +
      payload.status_code +
      hashedSecret;
    const localSig = crypto.createHash('md5').update(raw).digest('hex').toUpperCase();

    if (localSig !== payload.md5sig) {
      throw new Error('Invalid MD5 signature');
    }

    if (payload.custom_1?.startsWith('delegate|')) {
      await processDelegatePayment(payload);
    } else {
      await processPayHereNotification(payload);
    }

    return NextResponse.json({ status: 'ok' });
  } catch (err: any) {
    console.error('PayHere notify error:', err);
    return NextResponse.json({ error: err.message || 'Processing error' }, { status: 500 });
  }
}
