const translate = require('node-google-translate-skidz');

async function translateText(text){
    console.log(text)
    if (text==""){
        text="texto vacio"
    }
    let cosa= await translate({
        text: text,
        source: 'en',
        target: 'es'
      });
      return cosa.translation
}

async function transformarData(data){
    let jsondata=JSON.parse(data)
    let datatraducida=[]

    for(let i=0;i<jsondata.length;i++){
        datatraducida.push(await translateText(jsondata[i]))
    }

    return datatraducida
   
}


async function main(){
    let data= `["Inicio de la transcripción. Saltar al final.","English subtitle by Junhui DENG, deng@tsinghua.edu.cn","With a little help from Analytic Geometry, it's not hard to implement the ToLeft() test.","Yes, as we know, every line in the (planar) space can be described as an equation.","And the distance from any point to the line can be directly determined by the equation.","And furthermore, you can decide whether the point lies to the left/right of the line by the (sign of the) distance.","However, I have to say, it's not the best way.","Let's try another method next.","As we will see soon, it's more simple, safe and efficient.","The new approach is based on Determinant.","If you are not so familiar with Determinant, use Heron's formula learned in your high school instead.","For any three given points in the plane, this formula will give directly the area of the triangle spanned.","Such a determinant is equivalent to the triangle area.","Specifically, the determinant just doubles the area.","Note that the area here is directional.","For example, consider such a counter-clockwisely defined triangle, i.e., when point s lies to the left of directed segment pq, and another clockwisely defined one, i.e., when s lies to the right.","They may share a same area, but with different signs.","Yes, it's the area sign that is essential here.","Our To-Left test is just based on this sign.","It's not hard to verify that such a determinant is positive iff point s lies to the left of pq.","Besides, the calculation of such a determinant is straightforwardly and is hence easy to be implemented as a short piece of code.","As we can see, it's more concise to implement To-Left tests using determinant than by solving a equation system.","Such a simple method is easy to understand and hence results in code with fewer bugs and higher readability.","Besides, this method has one more advantage over others. Could you see it?","Yes, experienced coders would see in a few seconds that divisions and more complicated calculations, such as trigonometric functions, are thus avoided.","Such complex computation cause not only additional costs but also numerical errors.","You should know that such kind of errors might be fatal to algorithms.","So once such calculations are precluded, all these issues are hence eliminated.","Fin de la transcripción. Saltar al inicio."]`
    let result= await transformarData(data)

    console.log(result)
}
main()







