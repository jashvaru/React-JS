/* 
component in react should be name in pascal format TemporaryName
and while calling use <TemporaryName/>
*/
import Header from "./Header"
import Footer from "./Footer"
import Content from "./Content"

function Page() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
};



ReactDOM.render(<Page />, document.getElementById("root"))