import Link from "next/link";
import { Mutation } from "react-apollo";
import { TOGGLE_CART_MUTATION } from "./Cart";
import NavStyles from "./styles/NavStyles";
import User from "./User";
import CartCount from "./CartCount";
import Signout from "./Signout";

const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <NavStyles data-test="nav">
        <Link href="/">
          <a>Programs </a>
        </Link>
        <Link href="/">
          <a>Career Library</a>
        </Link>
        <Link href="/">
          <a>Success Story</a>
        </Link>
        <Link href="/">
          <a>Blog</a>
        </Link>
        <Link href="/items">
          <a>Pricing</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>

        {!me && (
          <Link href="/signup">
            <a>Sign In</a>
          </Link>
        )}
      </NavStyles>
    )}
  </User>
);

export default Nav;
