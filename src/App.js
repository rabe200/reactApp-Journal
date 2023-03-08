// import logo from './logo.svg';
import './colors.css';
import { Footer } from './components/footer/footer.js';
import { Entries } from './components/Entries/entries.js';
import { TabBar } from './components/tabBar/tab-bar.js';
import { Form } from './components/Form/form.js';
import { Header } from "./components/Header/header.js"
import { Main } from "./components/Main/main.js"

function App() {
  return (
    <>
<Header/>
<Main>
<Form title1="Motto" title2="Notes" button="Create Element"/>
<TabBar/>
<Entries/>
</Main>

<Footer content={"SAM0 APP SAM0 0815"}></Footer>
  </>)
}

export default App;
 