
import { useEffect, useState ,useMemo} from "react";
import { Outlet } from "react-router-dom";
import ListItem from "./ListItem";
import { getProduct } from "./productApi";
import './style.css';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from "react-redux";

const ProductList = () => {

  let basket=useSelector(state=>state.order.basket)//שליפת נתונים מהסטייט הכללי

  let [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct()
      .then((res) => {
        // המרת התשובה למערך של אובייקטים בפורמט JSON
        const data = JSON.parse(res.data);
        setProducts(data);
      })
      .catch((err) => {
        alert("לא ניתן לטעון את המוצרים");
        console.error("eror:" +err);
        console.log("err" + err);
      });
  }, []);

  const [search, setSearch] = useState(""); // משתנה למעקב אחר החיפוש
 // קביעת מצב ומשתנה למעקב אחר סדר המיון
  const [sortOrder, setSortOrder] = useState("asc"); // סדר המיון: עולה או יורד (ברירת מחדל היא עולה)
  // יצירת מערך ממוין בהתאם לסדר המיון הנוכחי
  // [arr, search, sortOrder]);יוז ממו גורם לכך שהמיון יקרה רק שמשהו מהם השתנה
  const sortedArr = useMemo(() => {
      // יצירת עותק של המערך ומיון העותק על פי גובה התרומה בסדר עולה או יורד
      //מקבל 2 אוביקטים אי ובי
    const sorted = [...products]

    //  מחזיר רק את התרומות שמכילים את האותיות שהמשתמש מחפש ומפעיל את סורטד
    return sorted.filter((item) => item.name.includes(search));
  }, [products, search, sortOrder]);

  
  if (!products) {
    return <div>No data available</div>; // הצגת הודעה כאשר אין נתונים
  }
 
return (
<>

       {/* כפתור לחיפוש אנשים */}
       <div className='cearchButton' >
       <Paper
      component="form"
      sx={{ p: '5px 5px', display: 'flex', alignItems: 'center', width: 200 }} >
      <InputBase
        sx={{ ml: 5, flex: 1 }}
        placeholder="חפש לפי שם"
        inputProps={{ 'aria-label':"search" }}
//  בעת שינוי הסט סירטש מקבל את התוכן מהמשתמש ומסנן
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" >
        <SearchIcon />
      </IconButton>
    </Paper>
    </div>

    <Box sx={{ flexGrow: 1, p: 5 }}>
  <Grid
    container
    spacing={30}
    sx={{
      '--Grid-borderWidth': '1px',
      borderTop: 'var(--Grid-borderWidth) solid',
      borderLeft: 'var(--Grid-borderWidth) solid',
      borderColor: 'divider',
      '& > div': {
        borderRight: 'var(--Grid-borderWidth) solid',
        borderBottom: 'var(--Grid-borderWidth) solid',
        borderColor: 'divider',
      },
    }}
  >
    {/* {products.map((product, index) => (<> */}
      {sortedArr.map((product, index) => (<>

      <Grid key={index} {...{ xs: 100, sm: 100, md: 100, lg: 3 } } minHeight={600} minWidth={660} >
        {/* <ListItem one={product} /> */}
        <ListItem
  key={index}
  one={product}
  // sx={{ backgroundColor: basket.name == product.name ? 'yellow' : 'red' }}
  // sx={{borderColor:'red'}}
/>

      </Grid>
</>
    ))}

  </Grid>

</Box>
<Outlet/>

</>
  );
};

export default ProductList;