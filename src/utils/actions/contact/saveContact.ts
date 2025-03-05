'use server';

export type TContact = {
  name: string;
  email: string;
  website: string;
  message: string;
};

export const saveContact = async (data: TContact) => {
  const res = await fetch(`${process.env.BACKEND_URL}/save-contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    cache: 'no-store',
  });
  const contactInfo = await res.json();
  return contactInfo;
};
