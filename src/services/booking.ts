import { supabase } from './supabase';

export const fetchServices = async () => {
  const { data, error } = await supabase
    .from('services')
    .select('*');

  if (error) throw error;
  return data;
};

export const createBooking = async (
  serviceId: string,
  customerId: string
) => {
  // 1️⃣ Get provider for this service
  const { data: service, error: serviceError } = await supabase
    .from('services')
    .select('provider_id')
    .eq('id', serviceId)
    .single();

  if (serviceError || !service?.provider_id) {
    throw new Error('Provider not found for service');
  }

  // 2️⃣ Insert booking WITH provider_id
  const { error } = await supabase.from('bookings').insert({
    service_id: serviceId,
    customer_id: customerId,
    provider_id: service.provider_id,
    status: 'pending',
  });

  if (error) throw error;
};


export const fetchMyBookings = async (customerId: string) => {
  const { data, error } = await supabase
    .from('bookings')
    .select('*, services(*)')
    .eq('customer_id', customerId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};
