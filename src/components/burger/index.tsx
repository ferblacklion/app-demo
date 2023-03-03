import { StyledBurger } from './style';
export const Burger = ({
  open,
  setOpen,
  ...props
}: {
  open: boolean;
  setOpen?: React.Dispatch<any>;
  props?: any;
}) => {
  const isExpanded = open ? true : false;

  return (
    <StyledBurger
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen?.(!open)}
      {...props}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};
