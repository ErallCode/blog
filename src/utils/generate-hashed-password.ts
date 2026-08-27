import { hashPassword } from "@/lib/login/password-hashing";

(async () => {
    const myPassword = "1234"; // DON'T FORGET TO DELETE YOUR PASSWORD FROM HERE
    const passwordHashInBase64 = await hashPassword(myPassword);

    console.log({ passwordHashInBase64 });
})();
