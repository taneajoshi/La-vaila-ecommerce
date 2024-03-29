import { categories } from '../../data';
import  styled  from 'styled-components';
import CategoryItem from './CategoryItem';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map(item => (
        <CategoryItem item={item} key={item.id}></CategoryItem>
      ))}
    </Container>
  )
}

export default Categories;

