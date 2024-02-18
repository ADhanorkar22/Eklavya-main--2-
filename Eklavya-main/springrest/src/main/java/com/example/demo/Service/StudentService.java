package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entities.Student;
import com.example.demo.Repository.StudentRepo;

@Service
public class StudentService {
	
	@Autowired
	StudentRepo sr ;
	
	public int save(Student s)
	{
		Student st = sr.save(s);
		return st.getStu_id();
	}
}