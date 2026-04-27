const WhatsAppFloat = () => {
  const phoneNumber = '+2348083808146';
  const message = encodeURIComponent("Hi B-iconx, I saw your portfolio and would like to discuss a project!");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-8 z-50 flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
      style={{
        boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.7)',
        animation: 'whatsapp-glow 2s ease-in-out infinite',
      }}
    >
      <style>{`
        @keyframes whatsapp-glow {
          0%   { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
          50%  { box-shadow: 0 0 20px 10px rgba(34, 197, 94, 0.3), 0 0 40px 20px rgba(34, 197, 94, 0.1); }
          100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
        }
      `}</style>

      {/* Tooltip */}
      <span className="absolute right-14 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us on WhatsApp
        <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
      </span>

      <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.827.737 5.476 2.027 7.776L0 32l8.468-2.003A15.929 15.929 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.276 13.276 0 0 1-6.771-1.853l-.486-.29-5.024 1.188 1.235-4.893-.317-.502A13.234 13.234 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.352-1.161-2.717-1.293-.364-.133-.63-.199-.895.199-.265.398-1.028 1.293-1.26 1.559-.232.265-.464.298-.862.1-.398-.2-1.681-.62-3.202-1.977-1.183-1.056-1.982-2.36-2.214-2.758-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.199-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.199-.895-2.157-1.227-2.953-.323-.775-.65-.67-.895-.682l-.762-.013c-.265 0-.696.1-1.061.497-.364.398-1.393 1.36-1.393 3.317 0 1.957 1.426 3.847 1.625 4.112.199.265 2.806 4.282 6.797 6.005.95.41 1.692.655 2.27.839.954.303 1.823.26 2.51.158.765-.114 2.352-.961 2.684-1.89.332-.928.332-1.723.232-1.89-.099-.166-.364-.265-.762-.464z"/>
      </svg>
    </a>
  );
};

export default WhatsAppFloat;