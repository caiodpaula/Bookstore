// Validações (Validação de titulo)
export const isValidEmail = (email: string): boolean => {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailRegex.test(email);
};

export const isValidPrice = (price: number): boolean => {
   return price > 0;
};

export const isValidName = (name: string): boolean => {
   return name.trim().length >= 3;
};

export const isValidTitle = (title: string): boolean => {
   return title.length >= 3;
};
