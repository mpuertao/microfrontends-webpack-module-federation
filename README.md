# microfrontends-webpack-module-federation
Proyecto con 6 Microfrontends entre ellos 1 shell y 5 remotes, construidos en Reactjs y Webpack Plugin Module Federation


# Build and Deploy in Local

1. signin: 

`npm start`

Este MF se encarga de la autenticacion y generar el token en el sessionStorage, es levantado en el puerto: 3003

2.  catalogue: 

`npm start`

Este MF se encarga mostrar los productos en general y por id, es levantado en el puerto: 3002

3. accountdetails:

`npm start`

Este MF se encarga mostrar en la seccion de MyAccount el detalle de la cuenta del usuario, es levantado en el puerto: 3005

4. paymentdetails:

`npm start`

Este MF se encarga mostrar en la seccion de MyAccount el detalle del pago, es levantado en el puerto: 3006


5. myaccount:

`npm start`

Este MF se encarga mostrar la seccion myaccount donde carga los dos MFs anteriores accountdetails y paymentdetails, es levantado en el puerto: 3004


6. appshell":

`npm start`

Este MF es el encargado de ser el HOST donde orquesta las diferentes rutas de los MFs, se despliega en el puerto: 3001

