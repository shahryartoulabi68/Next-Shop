
import { getAllProductApi } from "@/services/productService"
import CategoryList from "../_components/Categories"
import ProductList from "../_components/ProductList"
import queryString from "query-string"
import { getAllCategoryApi } from "@/services/category"
import ProductSort from "../_components/ProductSort"
import { cookies } from "next/headers"
import setCookiesOnReq from "@/utils/setCookiesOnReq"
import Search from "@/ui/Search"


async function ProductPage({ searchParams }) {
  const cookieStore = await cookies()
  const strCookies = setCookiesOnReq(cookieStore)

  const productsPromiss = getAllProductApi(queryString.stringify(searchParams), strCookies)
  const categoriesPromiss = getAllCategoryApi()
  const [{ products }, { categories }] = await Promise.all([productsPromiss, categoriesPromiss])

  return (
    <>
      <div className="md:flex items-center justify-between mb-4 px-4">
        <h1 className="font-bold text-secondary-800 text-lg mb-8 md:mb-0">صفحه محصولات</h1>
       <div className="flex-1"> <Search /></div>
      </div>
      <div className="grid gap-x-2 grid-cols-12 px-4">
        <div className="col-span-12 flex gap-x-4 w-full md:block md:col-span-3 lg:col-span-2">
          <CategoryList categories={categories} />
          <ProductSort />
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-10 gap-2 px-4">
          <ProductList products={products} />
        </div>
      </div>
    </>
  )
}

export default ProductPage
