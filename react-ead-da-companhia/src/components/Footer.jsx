export default function Footer({ children, size }) {
    let fontSize = 'text-sm';
  
    if (size === 'large') {
      fontSize = 'text-2xl';
    }
  
    return (
      <footer>
        <div className="bg-gray-100 mx-auto p-4">
          <h1 className={`text-center font-semibold ${fontSize}`}>{children}</h1>
        </div>
      </footer>
    );
  }
  