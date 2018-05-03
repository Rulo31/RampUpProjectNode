interface IAuditLog {
    Field_Name: String;
    Previous_Value: String;
    New_Value: String;
    Timestamp: Date;
    User_Id: Number;
    User_Name: String;
    Object_Type: String;
    Object_Id: Number;
    Details: String;
};

export = IAuditLog;