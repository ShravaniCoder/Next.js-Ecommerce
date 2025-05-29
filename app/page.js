import Header from "@/components/Header";
import ProductsListing from "@/components/ProductsListing";
import SearchBar from "@/components/Searchbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <SearchBar />
      <div className="px-6 md:px-16 lg:px-32">
        <ProductsListing />
      </div>
    </>
  );
}
