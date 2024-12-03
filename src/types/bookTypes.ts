interface ClientDataState {
    plate?: string;
    email?: string;
    phoneNumber?: string;
    firstName?: string;
    lastName?: string;
    middleName?: string;
    documentType?: string;
    documentNumber?: string;
  }
  interface GuardianDataState {
    representativeName?: string;
    representativeAddress?: string;
    representativePhone?: string;
    representativeEmail?: string;
  }
  interface productServiceState {
    bookType?: string;
    bookClainType?: string;
    description?: string;
  }
  
  interface ComplaintDetailsState {
    bookClaimType?: string;
    claim?: string;
    base64Document?: string;
  }
  
export   interface FormDataState {
    isMinor?: boolean;
    clientData?: ClientDataState;
    productService?: productServiceState;
    guardianData?: GuardianDataState;
    complaintDetails?: ComplaintDetailsState
    office?: string;
    base64Document?: string;
    SwornDeclaration?: boolean;
  }
  
  
  