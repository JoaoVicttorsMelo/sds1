package com.dvsuperior.dspesquisa.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dvsuperior.dspesquisa.dto.GameDTO;
import com.dvsuperior.dspesquisa.entities.Game;
import com.dvsuperior.dspesquisa.repositories.GameRepository;

@Service
public class GameService {

	@Autowired
	private GameRepository repository;
	
	public GameService() {
		// TODO Auto-generated constructor stub
	}
	@Transactional(readOnly=true)
	public List<GameDTO> findAll(){
		List<Game> list= repository.findAll();
		return list.stream().map(x-> new GameDTO(x)).collect(Collectors.toList());
	}

}
