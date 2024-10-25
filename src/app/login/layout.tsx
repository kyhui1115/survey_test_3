interface prop {
  children: React.ReactNode;
}

export default function LoginLayout({ children }: prop) {
  return (
    <div className="w-full h-full mb-10 bg-gray-100 flex justify-center items-center">
      <div className="pt-12 px-12 pb-6 rounded-md shadow-login bg-white flex flex-col items-center">
        {children}
      </div>
    </div>
  );
}
