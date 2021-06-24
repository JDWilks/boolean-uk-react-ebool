export default function CategoriesPage() {
  return (
    <main>
      <section class="categories-container main-wrapper">
        <ul class="categories-container__list">
          {/* <!-- Single category --> */}
          <li>
            {/* <!-- Use the Link component from React Router to create  */}
            {/* the anchor tags */}
            {/* --> */}
            <a
              style={{ ["--random-colour"]: `var(--yellow)` }}
              href="/categories/1"
            >
              electronics
            </a>
          </li>
          {/* <!--  --> */}
          <li>
            <a
              style={{ ["--random-colour"]: `var(--blue)` }}
              href="/categories/2"
            >
              jewelery
            </a>
          </li>
          {/* <!--  --> */}
          <li>
            <a
              style={{ ["--random-colour"]: `var(--green)` }}
              href="/categories/3"
            >
              men's clothing
            </a>
          </li>
          {/* <!--  --> */}
          <li>
            <a
              style={{ ["--random-colour"]: `var(--red)` }}
              href="/categories/4"
            >
              women's clothing
            </a>
          </li>
          {/* <!--  --> */}
        </ul>
      </section>
    </main>
  );
}
