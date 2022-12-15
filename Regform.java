package org.piyaa;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Regform
 */
@WebServlet("/Regform")
public class Regform extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Regform() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	//	doGet(request, response);
		response.setContentType("text/html");
		PrintWriter out =response.getWriter();
		String Name=request.getParameter("Name");
		String Email=request.getParameter("Email");
		String Contact=request.getParameter("Contact");
		String Password=request.getParameter("Password");
		String Confirm_Password=request.getParameter("Confirm_Password");
		try {
			com.mysql.cj.jdbc.Driver d=new com.mysql.cj.jdbc.Driver();
			DriverManager.registerDriver(d);
			Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/priya","root","Priya@3010");
			if(conn!=null) {
				PreparedStatement p=conn.prepareStatement("insert into form values('0', ? , ?, ?, ?, ?)");
				p.setString(1, Name);
				p.setString(2, Email);
				p.setString(3, Contact);
				p.setString(4, Password);
				p.setString(5,Confirm_Password);
				
				int value=p.executeUpdate();
				if(value>0) {
					out.println("registration success");
					
				}else {
					out.println("registration failed");
				}
				
			}else {
				out.println("error occurs");
			}
			
			
		}
		catch(Exception ex){
			out.println("error is"+ex);
			
		}
		
	}
	}


