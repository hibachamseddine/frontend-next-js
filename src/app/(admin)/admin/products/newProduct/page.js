import NewProduct from "@/app/components/admin/newProductComponent";
import { fetchSCategories } from "@/app/services/ScategorieService";
const getscategories=async()=>{
const data=await fetchSCategories()
return data;
}
const NewProductPage = async() => {
const scategories=await getscategories()
return (
<div>
<NewProduct scategories={scategories}/>
</div>
)
}
export default NewProductPage