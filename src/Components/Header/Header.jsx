import React from "react";
import style from "./Heder.module.css";
import Grid from "@material-ui/core/Grid";
import logo from "./../../Assets/logo.png";
import menulines from "./../../Assets/menulines.png";
import MenuReducer, {actionmodalmenu} from "../../Redux/menu-reducer";
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";
import Menumob from "../Menumob/Menumob";

import './styleheader.css'



let lastScrollY = 0;
let ticking = false;


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    nav = React.createRef();
    handleScroll = () => {
        lastScrollY = window.scrollY;
        if (lastScrollY >= 300 && this.nav.current) {
            window.requestAnimationFrame(() => {
                this.nav.current.className = " headermy header-prepare header-fixed";
            });
        } else if (lastScrollY < 300 && this.nav.current) {
            window.requestAnimationFrame(() => {
                this.nav.current.className = " header";
            });
        }
    };
    getModalMenuEnable = () => {
        this.props.actionmodalmenu(true)
    }

    getModalMenuDisable = () => {
        this.props.actionmodalmenu(false)
    }

    render() {
        return (
            <header ref={this.nav} id="header" class='header'>
                <Grid container
                      direction="row"
                      justify="space-between"
                      alignItems="center">
                    <Grid item
                          justify="flex-start"
                    >
                        <NavLink to='/'>
                            <div><img class='headerlogo' src={logo}/></div>
                        </NavLink>
                    </Grid>
                    <Menumob/>
                    {/*<Grid item justify="flex-start"*/}
                    {/*      className={styles.itemslanguage}><Languages/></Grid>*/}
                    <Grid item
                          >

                        <div><img src={menulines} class='iconion' onClick={this.getModalMenuEnable}/></div>
                        <div class='my-menu'>
                            <div className={style.header__nav__div}>
                                <nav className={style.header__nav}>
                                    <NavLink className={style.nav__link} to='/messager'>Messager</NavLink>
                                    <NavLink className={style.nav__link} to='/wallet'>Wallet</NavLink>
                                    <NavLink className={style.nav__link} to='/exchange'>Exchange</NavLink>
                                    <NavLink className={style.nav__link} to='/features'>Features</NavLink>
                                    <NavLink className={style.nav__link} to='/about'>Company</NavLink>
                                    <NavLink className={style.nav__link} to='/contacts'>Contact</NavLink>
                                </nav>
                            </div>
                        </div>
                    </Grid>

                </Grid>
            </header>

        );
    }
}


let mapStateToProps = (state) => ({
    statusmenu: state.Menumodal.statusMenu,
})

export default connect(mapStateToProps, {actionmodalmenu})(Header);











