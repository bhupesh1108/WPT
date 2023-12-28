export default function Footer(){


    const todaydate=new Date();
    const year=todaydate.getFullYear(); 
    return(
        <footer>
        <p>
            Copyright © {year}
        </p>
        </footer>
    )
}