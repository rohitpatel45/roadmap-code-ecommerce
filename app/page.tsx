import MostChoiceProduct from "@/components/MostChoiceProduct";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="max-w-6xl mx-auto">
        <div className="p-1 space-y-2 flex flex-col lg:flex-row">
          <div className="flex-1 flex flex-col items-start justify-center lg:space-y-4">
            <h3 className="text-sm font-medium">
              Welcome to Code Ecommerce Shop
            </h3>
            <div className="text-xs font-light lg:space-y-2">
              <p>Address: Barahi kala barahi Newada Varanasi</p>
              <p>Babatpur Jamalapur road</p>
              <p>Email: Code.test@gmail.com, Phone : 893288135</p>
            </div>
          </div>
          <div className=" flex-1">
            <img
              src="/Shopping-Image.jpg"
              alt=""
              className="h-96 w-full rounded-sm"
            />
          </div>
        </div>
        <MostChoiceProduct />
      </div>
     
    </main>
  );
}
