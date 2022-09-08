import ResponsiveAppBar from "./NavBar"
import Page from "./Page"
//issue fixed
export default function Home() {
    console.log("Home")
    return (
        <Page title="Home">
            <div style={{ height: "100%" }}><ResponsiveAppBar /><iframe style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                alignSelf: "center",
                overflow:"hidden"
            }} src="https://salesstrike23.wixsite.com/my-site"></iframe></div>

        </Page>
    )
}
