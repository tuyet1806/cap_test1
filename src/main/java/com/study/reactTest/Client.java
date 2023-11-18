package com.study.reactTest;

import java.net.Socket;

public class Client {
	Socket socket = null;
	String serverIp = "192.168.0.14";
	int serverPort = 8000;
	String fileName;
	String result;

	public Client(String fileName) {
		this.fileName = fileName;

		try {
			// 서버 연결
			socket = new Socket(serverIp, serverPort); // socket(),connect();
			System.out.println("서버에 연결되었습니다.");
			System.out.println(serverIp + " : " + serverPort);

			FileSender fileSender = new FileSender(socket, fileName);
			fileSender.start();//run() 스레드
			fileSender.join();//스레드 관련
			result = fileSender.getResult();
			System.out.println("result from server : " + result);
		} catch (Exception e) {
			e.printStackTrace();
		}// catch
	}
	
	public String getResult() {
		return result;
	}

}
