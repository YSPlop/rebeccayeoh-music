export interface FormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email'; // Using the `/api/contact` endpoint as defined earlier

  return fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Setting the appropriate content type
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      console.error('Error sending email:', err);
      alert('There was an error sending your message. Please try again.');
    });
}
