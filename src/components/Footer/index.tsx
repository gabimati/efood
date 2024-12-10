import { Container, FooterSection, Links, Link, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link>Ficção</Link>
          </li>
          <li>
            <Link>Suspense</Link>
          </li>
          <li>
            <Link>Aventura</Link>
          </li>
          <li>
            <Link>Romance</Link>
          </li>
          <li>
            <Link>Fantasia</Link>
          </li>
          <li>
            <Link>Não-Ficção</Link>
          </li>
          <li>
            <Link>Infanto-Juvenil</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link>Novidades</Link>
          </li>
          <li>
            <Link>Promoções</Link>
          </li>
          <li>
            <Link>Em breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; The Bookstore Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
