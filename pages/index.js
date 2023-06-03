import Brands from '../Components/Brands/Brands';
import Carousel from '../Components/Carousel/Carousel';
import Categories from '../Components/Categories/Categories';
import Features from '../Components/Features/Features';
import Footer from '../Components/Footer/Footer';
import Layout from '../Components/Layout/Layout';
import Products from '../Components/Products/Products';

function Home({posts , category , brands , features}) {

 
  return (

<Layout>
<Carousel posts={posts}/>
<Categories category={category}/>
<Brands brands={brands}/>
<Features features={features}/>
<Products />
<Footer />
</Layout>
  )
}
export default Home
//FETCH OF API
export async function getServerSideProps() {
  const [postsRes , categoryRes , brandsRes , featuresRes] = await Promise.all([
    fetch('https://api-task.bit68.com/en/api/slider_image/'),
    fetch('https://api-task.bit68.com/en/api/categories/'),
    fetch('https://api-task.bit68.com/en/api/brands/'),
    fetch(' https://api-task.bit68.com/en/api/items/'),

   

  ]);
  const [posts , category , brands , features ] = await Promise.all([
    postsRes.json(),
    categoryRes.json(),
    brandsRes.json(),
    featuresRes.json(),
  ]);

  return{
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
      category: JSON.parse(JSON.stringify(category)),
      brands: JSON.parse(JSON.stringify(brands)),
      features: JSON.parse(JSON.stringify(features)),
    }
  }

}



