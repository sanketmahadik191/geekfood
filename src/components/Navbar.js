import styles from"./Navbar.css"

const Navbar =() =>{
    return(<>
<nav class="navbar navbar-expand-lg bg-body-tertiary"  id="nav">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" id="logos">GeekFoods</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="https://sanketmahadik191.github.io/geekfood/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="https://sanketmahadik191.github.io/geekfood-quote/">Quote</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Resturants</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Foods</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
    <button id='hide'type="button" class="btn btn-primary">Primary</button>
  </div>
</nav>
  </> )
}

export default Navbar;