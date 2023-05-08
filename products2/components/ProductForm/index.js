import { StyledForm, StyledHeading, StyledLabel } from "./ProductForm.styled";
import { StyledButton } from "../Button/Button.styled";

export default function ProductForm({onSubmit, isEditMode, data}) {
  const {name, description, price, currency } = data ?? {};
  return (
    <StyledForm onSubmit={(event)=>onSubmit(event)}>
      <StyledHeading>{isEditMode ? "Update old Fish" :"Add a new Fish"}</StyledHeading>
      <StyledLabel htmlFor="name">
        Name:
        <input type="text" id="name" name="name" defaultValue={name} required/>
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input type="text" id="description" name="description" defaultValue={description} required/>
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input type="number" id="price" name="price" min="0" defaultValue={price} required/>
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select id="currency" name="currency" defaultValue={currency}>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}
