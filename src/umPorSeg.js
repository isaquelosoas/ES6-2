function umPorSeg(){
    const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
    async function umPorSegundo() {
        const espera = await Promise();
        console.log(espera);
    }
    umPorSegundo();
}
export default umPorSeg;