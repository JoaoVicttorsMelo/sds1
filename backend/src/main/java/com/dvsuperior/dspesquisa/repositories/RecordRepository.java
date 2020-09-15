package com.dvsuperior.dspesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dvsuperior.dspesquisa.entities.Record;

public interface RecordRepository extends JpaRepository<Record, Long>{

}
