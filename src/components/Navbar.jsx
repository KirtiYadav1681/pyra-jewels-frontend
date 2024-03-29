import React from "react"
import {Link} from "react-router-dom"
import { mobile } from "../responsive"
import styled from "styled-components"
import {useSelector,useDispatch} from "react-redux"
import { Badge } from "@material-ui/core"
import { Search, ShoppingCartOutlined} from "@material-ui/icons"
import {Logout }  from "../redux/apiCalls"
import { resetCart } from "../redux/cartRedux"

const Container = styled.div`
  height: 60px;
  ${mobile({height:"50px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding:"10px 0px"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display:"none"})}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({width:"50px"})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize:"18px"})}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:2,justifyContent:"center"})}
`;

const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 25px;
  cursor: pointer;
  ${mobile({fontSize:"12px",marginLeft:"10px"})}

`;

const Navbar = () => {
  const dispatch = useDispatch();
  const quantity = useSelector(state=>state.cart.quantity)
  // const user = useSelector(state=>state)

  const handleclick = () => {
    try{Logout(dispatch)
      dispatch(resetCart());
    }
    catch(e){console.log(e,"logout")}
  }
  


  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
        <Link to="/" style={{textDecoration: 'none',color:"black"}}>
          <Logo>PyraJewels</Logo>
        </Link>
        </Center>
        <Right>
          <MenuItem><Link to="./register" style={{textDecoration: 'none',color:"black"}}>REGISTER</Link></MenuItem>
          <MenuItem><Link to="./login"  style={{textDecoration: 'none',color:"black"}}>SIGN IN</Link></MenuItem>
          <MenuItem onClick={handleclick}>LOG OUT</MenuItem>
          <Link to="/cart" style={{textDecoration: 'none',color:"black"}}>
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
