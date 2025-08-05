'use client';
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from "next/navigation";


export default function LoginGooglePage() {
    const router = useRouter();
    //função que será chamada quando o login for bem sucedido
    //aqui vamos fazer uma requisição para o backend passando o token do google
    const handleSucces = async (credentialResponse: CredentialResponse) => {
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/google`,
                {
                    //fazer pequena alteração no backend para aceitar o token
                    //do google
                    credential: credentialResponse.credential,
                }
            );

            const jwt = response.data.jwt;
            localStorage.setItem("jwt", jwt);

            router.push("/map"); // Redireciona para a página inicial após o login

        } catch (error) {
            console.error("Error during Google login:", error);
        }
    };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <GoogleLogin
        onSuccess={handleSucces}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      <h1>Login with Google</h1>
      <p>Redirecting to Google...</p>
    </main>
  );
}

