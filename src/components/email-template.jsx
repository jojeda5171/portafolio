const EmailTemplate = ({ name, lastName, email, code, phone, message }) => (
  <div className="bg-gray-100 p-8 rounded-lg shadow-md">
    <h1 className="text-4xl font-bold text-gray-800">
      {name} {lastName}, te envío un mensaje
    </h1>
    <h4 className="text-lg font-semibold text-gray-700">Email: {email}</h4>
    <h4 className="text-lg font-semibold text-gray-700">
      Phone: {code} {phone}
    </h4>
    <p className="text-base text-gray-600 mt-4">{message}</p>
  </div>
);

export default EmailTemplate;
