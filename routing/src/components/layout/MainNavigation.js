import { NavLink } from "react-router-dom"
import classes from './MainNavigation.module.css'
function MainNavigation() {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>Great</div>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink activeClassName={classes.active} to="/">All Quotes</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to="/new-quote">New Quotes</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation