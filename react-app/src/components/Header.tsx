function Header() {
  return(
    <>
    <h1 className="text-4xl bg-gray-300 p-20 w-4/4">St. Teresa's Kariobangi Legion Mariae of African Mission Church</h1>
    <div className="flex">
    <div className="flex-auto"><img src={'../pics/mesiahh.jpg'} className="p-5 rounded" alt="Baba Simeo Melkio image" />
    <p className="">Baba Simeo Melkio</p>
    </div>
    <div className="flex-auto"><img src={'../pics/mamam.jpg'} className="p-5 rounded" alt="Mama Maria Regina"/>
<p className="">Mama Maria Regina</p>
</div>
    </div>
    <div className=""><button className="bg-yellow-400"><a href="">Welcome</a></button></div>
    </>
  )
}
export default Header;
