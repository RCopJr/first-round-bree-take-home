export const formatToDollar = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      currency: 'CAD',
      minimumFractionDigits: 2,
    }).format(amount);
  };
  