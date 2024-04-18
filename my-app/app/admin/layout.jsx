
import Header from "./_components/header/header";
export const metadata = {
    title: "admin",
    description: "admin page",
  };
  
  export default function AdminLayout({ children }) {
    return (
      <html lang="en">
        <body >
            <main className="admin-p">
                <div className="admin-p-container">
                    <Header />

                    {children}
                </div>
            </main>
        </body>
      </html>
    );
  }