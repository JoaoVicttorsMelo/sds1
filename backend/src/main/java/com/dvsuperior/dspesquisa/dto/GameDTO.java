package com.dvsuperior.dspesquisa.dto;

import java.io.Serializable;

import com.dvsuperior.dspesquisa.entities.Game;
import com.dvsuperior.dspesquisa.entities.enums.Platform;

public class GameDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	private Long id;
	private String title;
	private Platform platform;

	public GameDTO() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Platform getPlatform() {
		return platform;
	}

	public void setPlatform(Platform platform) {
		this.platform = platform;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public GameDTO(Game entity) {
		id = entity.getId();
		platform = entity.getPlatform();
		title = entity.getTitle();
	}

}
