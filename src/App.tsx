import { ReactNode } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <LayoutContainer>
      <main className="px-5 py-10 space-y-6 italic text-gray-600 font-light">
        <code>
          <pre>
            {`
"dependencies": {
"@tailwindcss/vite": "4.1.4",
"clsx": "2.1.1",
"framer-motion": "12.7.4",
"react": "19.0.0",
"react-dom": "19.0.0",
"tailwind-merge": "3.2.0",
"tailwindcss": "4.1.4",
"use-breakpoint": "4.0.6"        
},
          `}
          </pre>
        </code>
        <div className="space-y-4">
          <div className="bg-emerald-500 text-emerald-100 p-3 rounded-md">
            Apple
          </div>
          <div className="bg-pink-500 p-3 text-pink-100 rounded-md">Apple</div>
          <div className="bg-blue-500 p-3 rounded-md text-blue-100">Apple</div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          quisquam, neque non, nemo ipsam reprehenderit molestiae, eos ad
          assumenda expedita voluptas fugit quo? Porro, cum neque officia
          ratione ut minima! Vero dicta dolorem dolor fugiat tenetur impedit
          eveniet, nihil cum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet odio
          qui velit magnam unde corporis accusamus doloremque vitae
          consequuntur, obcaecati sit harum ut minima aliquid? Eos totam ratione
          nam non!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore vitae
          laudantium non ad consequatur, ratione sunt ducimus, fuga repudiandae
          quam at, quia maxime ex distinctio totam unde voluptatem laborum
          aperiam cumque facere nobis? Eligendi voluptatibus atque, provident
          sequi quae earum sunt laudantium vero possimus distinctio natus id,
          excepturi deleniti asperiores quisquam rem veritatis optio doloribus,
          maxime voluptatem et numquam dignissimos.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          exercitationem aliquid nulla rerum atque cum sapiente pariatur
          ratione, error possimus quam voluptas adipisci nam. Ullam pariatur
          sint animi doloremque? Repellat ipsam cumque, aliquam nihil quis
          eveniet sapiente iure provident necessitatibus, cupiditate accusamus
          praesentium enim maxime soluta! Nam culpa sit eius.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et maiores
          suscipit nam. Nihil fuga, molestiae dolorum modi provident pariatur
          dolores odio magni accusamus minima id.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium,
          atque alias reiciendis eligendi fugit maiores ea quis. Hic ducimus
          voluptates quidem sed veniam maiores quaerat nobis porro voluptas unde
          itaque delectus a distinctio accusantium, quasi voluptate, enim
          repellendus quos, fuga quod quae impedit! Sapiente, quidem? Porro
          quidem libero obcaecati id harum soluta animi impedit quaerat et. Nam
          voluptates ratione doloribus!
        </p>
      </main>
    </LayoutContainer>
  );
}

export default App;

const LayoutContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] antialiased">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
