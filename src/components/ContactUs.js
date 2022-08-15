import ResponsiveAppBar from "./NavBar"

export default function ContactUs() {
    console.log("Home")
    return <div style={{height:"100%"}}><ResponsiveAppBar/><div style={{position: "relative",
        paddingBottom: "56.25%", /* 16:9 */
        paddingTop: "25px", height:"100%"}}><iframe style={{position: "absolute",
            top: 0
            ,
            left: 0,
            width: "100%",
            height: "100%"}}src="https://salesstrike23.wixsite.com/my-site/contact-8" width="100%" height="100%"></iframe></div>
</div>
}
