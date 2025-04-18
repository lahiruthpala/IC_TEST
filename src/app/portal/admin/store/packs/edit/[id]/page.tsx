'use client';

import { useState } from 'react';
import { IconAlertCircle } from '@tabler/icons-react';
import { Alert, Center, Container, Loader, Stack, Title } from '@mantine/core';
import { useStorePack, useUpdateStorePack } from '@/lib/store/packs/hooks';
import { StorePack } from '@/lib/store/types';
import { PackForm } from '../../(components)';

interface EditPackPageProps {
  params: {
    id: string;
  };
}

export default function EditPackPage({ params }: EditPackPageProps): JSX.Element {
  const packId = params.id;
  const [error, setError] = useState<Error | null>(null);

  const { data: pack, isLoading: isLoadingPack, error: fetchError } = useStorePack(packId);
  const updatePackMutation = useUpdateStorePack();

  // Handle form submission to update the pack
  const handleUpdatePack = async (formData: StorePack): Promise<void> => {
    try {
      setError(null);
      await updatePackMutation.mutateAsync({
        id: packId,
        data: {
          pack_code: formData.pack_code,
          name: formData.name,
          description: formData.description,
          price: formData.price,
          images: formData.images,
          active: formData.active,
        },
        packItems:
          formData.pack_items?.map((item) => ({
            item_id: item.item_id,
            quantity: item.quantity,
          })) || [],
      });
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to update store pack'));
      throw err; // Re-throw to let the form component handle it
    }
  };

  if (isLoadingPack) {
    return (
      <Container fluid p="md">
        <Center my="xl">
          <Loader size="md" />
        </Center>
      </Container>
    );
  }

  if (fetchError || !pack) {
    return (
      <Container fluid p="md">
        <Alert icon={<IconAlertCircle size={16} />} title="Error loading pack" color="red">
          {fetchError?.message || 'Pack not found'}
        </Alert>
      </Container>
    );
  }

  return (
    <Container fluid p="md">
      <Stack gap="md">
        <Title order={2} c="gray.8">
          Edit Pack: {pack.name}
        </Title>

        <PackForm
          initialValues={pack}
          onSubmit={handleUpdatePack}
          isLoading={updatePackMutation.isPending}
          error={error}
          submitButtonText="Update Pack"
        />
      </Stack>
    </Container>
  );
}
