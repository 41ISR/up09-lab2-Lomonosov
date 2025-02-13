import LogInForm from "../component/LogInForm"
const LogIn = () => {
   return (
      <div>
         <div className="absolute w-96 h-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col items-center justify-center bg-white border border-black rounded-lg">
            <h1 className="text-2xl font-bold mt-4">Вход в аккаунт</h1>
            <LogInForm />
         </div>
      </div>
   )
}
export default LogIn