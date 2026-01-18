// Pure mock M-Pesa simulator
class MpesaSimulator {
  private static instance: MpesaSimulator;
  
  static getInstance(): MpesaSimulator {
    if (!MpesaSimulator.instance) {
      MpesaSimulator.instance = new MpesaSimulator();
    }
    return MpesaSimulator.instance;
  }
  
  validatePhone(phone: string): boolean {
    const regex = /^(?:254|\+254|0)?(7[0-9]{8})$/;
    return regex.test(phone);
  }
  
  formatPhone(phone: string): string {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.startsWith('254')) return cleaned;
    if (cleaned.startsWith('0')) return `254${cleaned.substring(1)}`;
    if (cleaned.startsWith('7') && cleaned.length === 9) return `254${cleaned}`;
    return `254${cleaned}`;
  }
  
  async initiatePayment(phone: string, amount: number, orderId: string): Promise<{
    success: boolean;
    message: string;
    checkoutRequestId: string;
  }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: `STK Push sent to ${phone}. Please enter your M-Pesa PIN on your phone to complete payment of Ksh ${amount}.`,
          checkoutRequestId: `ws_CO_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        });
      }, 1000);
    });
  }
  
  simulateCallback(checkoutRequestId: string): Promise<{
    success: boolean;
    receipt: string;
    phone: string;
    amount: number;
    timestamp: string;
  }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const success = Math.random() > 0.1; // 90% success
        resolve({
          success,
          receipt: success ? `RL${Date.now()}${Math.floor(Math.random() * 1000)}` : '',
          phone: `2547${Math.floor(Math.random() * 100000000)}`,
          amount: success ? Math.floor(Math.random() * 5000) + 500 : 0,
          timestamp: new Date().toISOString()
        });
      }, 3000 + Math.random() * 3000);
    });
  }
}

export default MpesaSimulator;