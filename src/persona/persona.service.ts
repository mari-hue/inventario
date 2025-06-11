import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from '../entities/persona.entity';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';

@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
  ) {}

  create(createPersonaDto: CreatePersonaDto) {
    const persona = this.personaRepository.create(createPersonaDto);
    return this.personaRepository.save(persona);
  }

  findAll() {
    return this.personaRepository.find();
  }

  findOne(id: number) {
    return this.personaRepository.findOneBy({ id });
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return this.personaRepository.update(id, updatePersonaDto);
  }

  remove(id: number) {
    return this.personaRepository.delete(id);
  }
}
