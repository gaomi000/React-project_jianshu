import React , {Component} from "react";
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,Addition,Button,SearchWrapper
} from './style';


class Header extends Component{
    render(){
        return(
            <HeaderWrapper>
                <Logo href='/'/>
                <Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					{/* {
						login ? 
							<NavItem onClick={logout} className='right'>退出</NavItem> : 
							<Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
					} */}
					<NavItem className='right'>
					</NavItem>
                    <SearchWrapper></SearchWrapper>
                    <NavSearch></NavSearch>
                    
                    <NavItem className='right'>
                    <span className="iconfont">&#xe636;</span>
                    </NavItem>
					<NavItem className='right'>登陆</NavItem>
				</Nav>
                <Addition>
					{/* <Link to='/write'> */}
						<Button className='writting'>
							<i className="iconfont">&#xe615;</i>
							写文章
						</Button>
					{/* </Link> */}
					<Button className='reg'>注册</Button>
				</Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		// focused: state.getIn(['header', 'focused']),
		// list: state.getIn(['header', 'list']),
		// page: state.getIn(['header', 'page']),
		// totalPage: state.getIn(['header', 'totalPage']),
		// mouseIn: state.getIn(['header', 'mouseIn']),
		// login: state.getIn(['login', 'login'])
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		// handleInputFocus(list) {
		// 	(list.size === 0) && dispatch(actionCreators.getList());
		// 	dispatch(actionCreators.searchFocus());
		// },
		// handleInputBlur() {
		// 	dispatch(actionCreators.searchBlur());
		// },
		// handleMouseEnter() {
		// 	dispatch(actionCreators.mouseEnter());
		// },
		// handleMouseLeave() {
		// 	dispatch(actionCreators.mouseLeave());
		// },
		// handleChangePage(page, totalPage, spin) {
		// 	let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
		// 	if (originAngle) {
		// 		originAngle = parseInt(originAngle, 10);
		// 	}else {
		// 		originAngle = 0;
		// 	}
		// 	spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

		// 	if (page < totalPage) {
		// 		dispatch(actionCreators.changePage(page + 1));
		// 	}else {
		// 		dispatch(actionCreators.changePage(1));
		// 	}
		// },
		// logout() {
		// 	dispatch(loginActionCreators.logout())
		// }
	}
}


export default connect(mapStateToProps, mapDispathToProps)(Header);