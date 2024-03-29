import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useState } from 'react';

const Option = styled.option``;
const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
 font-size:20px;
 font-weight:600;
 margin-right:20px;
 ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
   ${mobile({ margin: "10px 0px" })}
`;

const ProductList = () => {
  const location = useLocation();
  const [sort,setSort] = useState("");
  const [filter,setFilter] = useState({});
  const cat = location.pathname.split("/")[2];

  const handleFilters= (e) =>{
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name] : value
    })
  }
  
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>
              Color
            </Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Red</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Product:</FilterText>
          <Select name="sort" onChange={e=>{setSort(e.target.value)}}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filter} sort={sort}/>
      <Newsletter/>
      <Footer/>
    </Container>
  );
};

export default ProductList;
